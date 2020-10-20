import { PtObjectBase } from './pt-object-base.model';
import { PtTask } from './pt-task.model';
import { PtComment } from './pt-comment.model';
import { PtUser } from './pt-user.model';
import { PriorityEnum } from './enums/item-priority.enum';
import { StatusEnum } from './enums/item-status.enum';
import { PtItemType } from '../domain/types/pt-item-type';

export interface PtItem extends PtObjectBase {
    description?: string;
    type: PtItemType;
    estimate: number;
    priority: PriorityEnum;
    status: StatusEnum;
    assignee: PtUser;
    tasks: PtTask[];
    comments: PtComment[];
}
