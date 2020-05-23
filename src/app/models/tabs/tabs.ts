export class Tabs {
    id: number;
    name: string;
    position: number;
    parent: Tabs;
    child: Tabs;
    active: boolean;
    constructor(id: number,name: string, position: number, parent: Tabs, child: Tabs,active: boolean){
        this.id = id;
        this.name = name;
        this.position = position;
        this.parent = parent;
        this.child = child;
        this.active = active;
    }
}
