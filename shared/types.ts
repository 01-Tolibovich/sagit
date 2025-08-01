import { ReactNode } from "react";

export type OptionType = { [name: string]: string | number };

export type PageLanguageParams = {
  params: {
    lng: string;
  };
};

export type FileResponse = {
  name: string;
  success: boolean;
};

export type NavigationItem = {
  label: string;
  href?: string;
  children?: NavigationItem[];
  key?: string;
  hash?: string;
  params?: object;
  Icon?: ReactNode;
};

export type IconProps = {
  className?: string;
  onClick?: () => void;
};

export type SelectOption = {
  label: string;
  readonly value: string;
  icon?: ReactNode;
};

export type ValueOption = {
  title: string;
  description: string;
};

export type AchievementOption = {
  title: string;
  description: string;
};

export type ProductAndServiceOption = {
  image: string;
  title: string;
  description: string;
  link?: string;
  color: string;
};

export type Project = {
  image: string;
  title: string;
  description: string;
  color: string;
};

export type BannerSlider = {
  subtitle?: string;
  title: string;
  description: string;
  link: string;
  color: string;
  color_text?: "white" | "black";
  image: string;
  mobile_image: string;
  type: number;
};

export type AdditionalInformation = {
  title: string;
  description: string;
  link: string;
  color: string;
};

export type PlacemarkType = {
  latitude: number;
  longitude: number;
};

type Translation = {
  id: number;
  value: string;
  field: string;
  languageId: number;
  createdAt: Date;
  updatedAt: Date;
  newsId: number | null;
};

export type AddressCategory = {
  id: number;
  icon: string;
  createdAt: Date;
  updatedAt: Date;
  addressCategoryTypeId: number;
  languageId: number | null;
  addressCategoryType?: {
    id: number;
    code: string;
    createdAt: Date;
    updatedAt: Date;
  };
  translations: Translation[];
};

export enum ApplicationStatus {
  APPLICATION = "APPLICATION",
  INVITATION = "INVITATION",
  REFUSAL = "REFUSAL",
}

export type Addresess = {
  translations: {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    languageId: number;
    value: string;
    field: string;
    newsId: number | null;
  }[];
  services: ({
    translations: {
      id: number;
      createdAt: Date;
      updatedAt: Date;
      languageId: number;
      value: string;
      field: string;
      newsId: number | null;
    }[];
  } & {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    icon: string;
    addressId: number | null;
  })[];
  isArchived: boolean;
}[];

export type Params = {
  params: Promise<{ lng: string }>;
};

export type Variants =
  | {
      // find(arg0: (v: unknown) => unknown): unknown;
      types?:
        | {
            img: string;
            p: string;
            id?: number | undefined;
          }[]
        | undefined;
    }[]
  | undefined;

export interface InteractiveTabSteps {
  formData: {
    progress: string;
    deck: string;
    tabs?: {
      title: string;
      normalLenght?: number | undefined;
      minLenght?: number | undefined;
      maxLenght?: number | undefined;
      m?: string | undefined;
      input?: string | undefined;
      nameInput?: string | undefined;
      phoneInput?: string | undefined;
      submitBtn?: string | undefined;
      dataProcessingNotice?: string | undefined;
      id?: number | undefined;
      variants?: Variants;
    }[];
    backBtn: string;
    nextBtn: string;
  };
}
