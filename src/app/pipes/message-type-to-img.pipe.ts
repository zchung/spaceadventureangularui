import { PipeTransform, Pipe } from '@angular/core';
import { MessageType } from '../models/enums/message-type';

@Pipe({ name: 'messageTypeToImage'})
export class MessageTypeToImagePipe implements PipeTransform {
  transform(messageType: MessageType): string {
    switch (messageType) {
      case MessageType.DamageToHostileLocation:
        return 'https://media.giphy.com/media/YN80VnGG9SmEp847Ge/giphy.gif';
      case MessageType.DamageToShields:
        return 'https://media.giphy.com/media/iKH59Tf4P0JdzrJJpj/giphy.gif';
      case MessageType.DamageToShip:
        return 'https://media.giphy.com/media/J1e5qG5Lsr5gKIusXP/giphy.gif';
      case MessageType.GameOverDestroyed:
        return 'https://media.giphy.com/media/UVGLYbE2HMHPMUtMeg/giphy.gif';
      case MessageType.GameOverNoPower:
        return 'https://media.giphy.com/media/J54uwpUL5YCpTsGnBc/giphy.gif';
      case MessageType.Mine:
        return 'https://media.giphy.com/media/YSewkPRmAojlHEMDKY/giphy.gif';
      case MessageType.PowerDown:
        return 'https://media.giphy.com/media/VCzUtrCizUowNjzI0g/giphy.gif';
      case MessageType.PowerUp:
        return 'https://media.giphy.com/media/M8npxcuoZEouZBBLei/giphy.gif';
      case MessageType.Trade:
        return 'https://media.giphy.com/media/SRx5BKVPOlMLsBzrT5/giphy.gif';
      case MessageType.Travel:
        return 'https://media.giphy.com/media/Td9M4vBMkBKUFIovh8/giphy.gif';
      default:
        break;
    }
    return null;
  }

}
