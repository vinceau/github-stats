import path from "path";
import axios from "axios";

interface GithubDownloadCounts {
  id: string;
  name: string;
  tag: {
    id: string;
    name: string;
  };
  createdAt: string;
  url: string;
  releaseAssets: {
    nodes: Array<{
      id: string;
      name: string;
      downloadCount: number;
      downloadCountHistory: Array<{
        id?: number;
        releaseId: string;
        assetId: string;
        downloads: number;
        tstz: string;
      }>;
    }>;
  };
}

export interface ReleaseInformation {
  name: string; // Name of the asset
  data: [string, number][]; // ISO Date strings and their download counts
}

export async function fetchDownloadCounts(
  owner: string,
  repo: string
): Promise<Map<string, ReleaseInformation[]>> {
  console.log("fetching data from github");
  const url = `https://gh-stats-api.herokuapp.com/releases/${owner}/${repo}`;
  const releasesInfo: GithubDownloadCounts[] = (await axios.post(url)).data;
  console.log("got this data:");
  console.log(releasesInfo);
  const result = new Map<string, ReleaseInformation[]>();
  // list of names per release
  releasesInfo.forEach(r => {
    console.log(`iterating through ${r.name}`);
    r.releaseAssets.nodes.forEach(n => {
      const ext = path.extname(n.name);
      const current = result.get(ext) || [];
      current.push({
        name: n.name,
        data: n.downloadCountHistory.map(d => [d.tstz, d.downloads]),
      });
      result.set(ext, current);
    });
  });
  console.log("here are some names:");
  console.log(result);
  return result;
}
