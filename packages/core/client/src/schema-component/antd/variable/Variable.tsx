import { connect, mapReadPretty } from '@formily/react';

import { Input } from "./Input";
import { TextArea } from "./TextArea";
import { JSONInput } from "./JSONInput";



export function Variable() {
  return null;
}

Variable.Input = connect(Input);

Variable.TextArea = connect(TextArea, mapReadPretty(TextArea.ReadPretty));

Variable.JSON = connect(JSONInput);

export default Variable;
