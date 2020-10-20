import { PtItem } from '../models/domain/pt-item.model';
import { PtUser } from '../models/domain/pt-user.model';

export type StateKey = 'backlogItems' | 'currentUser';

export interface State {
    backlogItems: PtItem[];
    currentUser: PtUser;
    [key: string]: any;
}

export const INITIAL_STATE: State = {
    backlogItems: [],
    currentUser: undefined
};
