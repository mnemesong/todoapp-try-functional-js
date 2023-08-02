export type T<M> = {
    $update: (update: (state: M) => M) => void;
    read: () => M;
};
