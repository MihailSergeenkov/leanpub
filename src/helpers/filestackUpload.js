import * as filestack from 'filestack-js';

const API_TOKEN = 'AFxEIEXQtR8Of6iy5OeDnz';
const client = filestack.init(API_TOKEN);

const filestackUpload = (file) => (
  client.upload(file)
);

export default filestackUpload;
