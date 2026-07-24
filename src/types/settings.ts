export interface BrandingSettings {
  logo: string;
  favicon: string;
  appleTouchIcon: string;
  ogImage: string;
}

export interface SiteSettings {
  siteUrl: string;
}

export interface Settings {
  _id?: string;

  branding: BrandingSettings;

  site: SiteSettings;

  createdAt?: string;
  updatedAt?: string;
}