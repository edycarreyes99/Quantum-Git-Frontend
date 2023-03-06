export interface IBranch {
  name: string;
  protected: boolean;
  commit: {
    sha: string,
    url: string
  }
}
