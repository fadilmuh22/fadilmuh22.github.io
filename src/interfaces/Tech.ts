import {
  FaAngular,
  FaJava,
  FaLaravel,
  FaPython,
  FaReact,
} from 'react-icons/fa';
import { IconType } from 'react-icons/lib';
import { SiFlutter } from 'react-icons/si';

export interface TechInterface {
  name: string;
  Icon: IconType;
  description: string;
}

export const TechIconMapping: { [key: string]: IconType } = {
  react: FaReact,
  angular: FaAngular,
  python: FaPython,
  flutter: SiFlutter,
  java: FaJava,
  laravel: FaLaravel,
};
