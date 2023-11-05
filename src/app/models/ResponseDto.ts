export class ResponseDto<T> {
  data: T | undefined;
  succeeded: boolean = false;
  errors: string[] = [];
  message: string = '';

  public ResponseDto(data: T) {
    this.succeeded = true;
    this.message = '';
    this.errors = [];
    this.data = data;
  }
}
