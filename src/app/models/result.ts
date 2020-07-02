import { ResultType } from './enums/result-type';

export interface Result<T> {
  data: T;
  resultType: ResultType;
  messages: Array<string>;
}
