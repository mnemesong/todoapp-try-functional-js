export type T<Id, M> = {
    $update: (update: (state: M[]) => M[]) => void;
    read: () => M[];
};
