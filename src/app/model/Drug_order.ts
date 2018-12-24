import { Drug } from "./Drug";
import { User } from "./User";

export interface Drug_order{
    autorized_by:number,
    autorizer: User, 
    drug_id:number, 
    drug: Drug, 
    ordered_quantity:number, 
    adjusted_quantity:number, 
    issued_quantity:number, 
    batch_number:number, 
    is_recived:boolean,
    expier_at:string,
    recived_at:string, 
    created_at: string, 
    updated_at: string,
    selected: boolean
}