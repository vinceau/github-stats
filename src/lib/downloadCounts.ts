import path from "path";
import axios from "axios";
import { ReleaseInformation, RepoRelease } from "./types";

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

export async function fetchDownloadCounts(owner: string, repo: string, limit = 5): Promise<RepoRelease[]> {
  const url = `https://gh-stats-api.herokuapp.com/releases/${owner}/${repo}`;
  const params = {
    limit,
  };
  const releasesInfo: GithubDownloadCounts[] = (await axios.post(url, undefined, { params })).data;
  const result = new Map<string, ReleaseInformation[]>();
  // list of names per release
  releasesInfo.forEach(r => {
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
  const keys = Array.from(result.keys());
  keys.sort();
  return keys.map(k => ({
    extension: k,
    stats: result.get(k) || [],
  }));
}
