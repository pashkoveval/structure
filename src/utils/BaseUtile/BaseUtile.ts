export interface BaseUtile {
  action: (...attrs: unknown[]) => void | JSON | Error | Promise<void | JSON | Error>;
}

const baseUtile: BaseUtile = {
  action: () => {
    console.log('Run baseUtile');
  },
};

export default baseUtile;
