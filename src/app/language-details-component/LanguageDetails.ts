export enum LanguageLevel {
  Beginer,
  Basic,
  Intermediate,
  Advanced,
  Business,
  Native
}
export class LanguageDetails {
  public Language: string;
  public Level: LanguageLevel;
  constructor() {
    this.Language = "";
    this.Level = LanguageLevel.Basic;
  }
}
