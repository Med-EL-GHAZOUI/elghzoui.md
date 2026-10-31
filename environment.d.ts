export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY?: string;
    }
  }
}
