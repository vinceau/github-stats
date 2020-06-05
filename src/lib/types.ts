export interface ReleaseInformation {
  name: string; // Name of the asset
  data: [string, number][]; // ISO Date strings and their download counts
}

export interface RepoRelease {
  extension: string;
  stats: ReleaseInformation[];
}
