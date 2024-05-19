<<<<<<< HEAD

=======
>>>>>>> 09b019a (Add tests ESlint)
export type BuildMode = 'production' | 'development';

export interface BuildPaths {
    entry: string;
    build: string;
    html: string;
<<<<<<< HEAD
    src: string
=======
    src: string;
>>>>>>> 09b019a (Add tests ESlint)
}

export interface BuildEnv {
    mode: BuildMode;
    port: number;
}

export interface BuildOptions {
    mode: BuildMode;
    paths: BuildPaths;
    isDev: boolean;
    port: number;
}
