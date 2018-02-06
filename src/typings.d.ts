/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

// ./src/typings.d.ts
declare module "*.json" {
  const value: any;
  export default value;
}
