/* typescript interface */
/* interface contains different fields for a particular resource */
export interface Item {
     /* ? means optional */
    id?: string;
    name: string;
    description?: string
    qty : number;
}