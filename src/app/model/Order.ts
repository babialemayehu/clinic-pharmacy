import { Supplier } from "./Supplier";
import { User } from "./User";
import { Drug } from "./Drug";

export interface Order{
    id:number,
    order_by:number, 
    order: User, 
    supplier_id:number,
    supplier: Supplier,  
    issued_by:number,
    issrer: User, 
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
    selected: boolean
    created_at: string, 
    updated_at: string,
}