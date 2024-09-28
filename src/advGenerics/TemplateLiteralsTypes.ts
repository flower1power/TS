type ReadOrWrite = 'read' | 'writhe';
type Bulk = 'bulk' | '';

type Acces = `can${Capitalize<ReadOrWrite>}${Capitalize<Bulk>}`;

type ReadOrWritheBulk<T> = T extends `can${infer R}` ? R : never;

type T = ReadOrWritheBulk<Acces>;

type ErrorOrSuccess = 'error' | 'success';

type ResponseT = {
  result: `http${Capitalize<ErrorOrSuccess>}`;
};

const res8: ResponseT = {
  result: 'httpSuccess',
};
