import PomodoroTimer from './PomodoroTimer';
import User from '../classes/utils/User';

export default class UserService {
  private users: Map<string, User> = new Map<string, User>();

  public get(id: string): User | null {
    const user = this.users.get(id);

    if (user) {
      return user;
    }

    return null;
  }

  public create(id: string, json: any, timer: PomodoroTimer): User {
    const user = new User(json, timer);
    this.users.set(id, user);
    return user;
  }
}
