var obj = {
    func: function(){
        alert("no you");
    }
    x: 0,
    y: 0,
    w: 0,
    KE: 0,
    boi: function(){
        this.func();
        this.y*=this.KE;
    };
}
obj.func();
