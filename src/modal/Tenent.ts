export enum TenentTypes {
    REAL = "REAL",
    DEMO = "DEMO",
  }

export enum TenentStatus {
    ACTIVE = "ACTIVE",
    NOT_ACTIVE = "NOT_ACTIVE",
  }

export interface Tenent {
    id: string;
    name: string;
    description: string;
    code: string;
    type: TenentTypes;
    status: TenentStatus;
  }