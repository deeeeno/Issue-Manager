export const User = function(seq,id,nickName,password){
    this.seq=seq;
    this.id=id;
    this.nickName=nickName;
    this.password=password;
    
}

export const Issue = function(seq,id,reporter_seq,asignee_seq,status,priority,title,description){
    this.seq = seq;
    this.id = id;
    this.reporter_seq = reporter_seq;
    this.asignee_seq = asignee_seq;
    this.status = status;
    this.priority = priority;
    this.title = title;
    this.description = description;
}

export const Comment = function(id,index,issue_seq,commenter_seq,description){
    this.index = index;
    this.issue_seq = issue_seq;
    this.commenter_seq = commenter_seq;
    this.description = description;    
}
