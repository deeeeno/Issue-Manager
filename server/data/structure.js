export const User = function(id,nickName,password,seq){
    this.id=id;
    this.nickName=nickName;
    this.password=password;
    this.seq=seq;
}

export const Issue = function(id,reporter_seq,asignee_seq,status,priority,title,description){
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
