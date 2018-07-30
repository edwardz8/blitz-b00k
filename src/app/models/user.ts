export interface User {
    userId: string;
    userName: string;
}

export interface FullComment {
    commentId: string;
    userId: string;
    user: User;
}

export interface CommentObject {
    commentId: string;
    commentText: string;
    userId: string;
}
