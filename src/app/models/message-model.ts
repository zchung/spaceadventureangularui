import { MessageType } from './enums/message-type';

export class MessageModel {
  messageType: MessageType;
  messageText: string;
  messageImageUrl: string;
}
