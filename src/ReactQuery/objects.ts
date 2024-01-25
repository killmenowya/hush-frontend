
export interface Thread  {
   ID:              number,
   CreatedAt:       string,
   IdUser:          number,
   Title:           string,
   Body:            string,
   Tag:             string,
   Likes:           number,
   Dislikes:        number,
   ResponseCount:   number,
   IsHidden:        boolean
}

export interface Comment  {
    IdThread:       number,
    IdUser:         number,
    Message:        string,
    Likes:          number,
    Dislikes:       number
}

export interface Tags  {
    Tag:            string,
    Counter:        number
}

export interface saved  {
    IdThread:       number,
    IdUser:         number
}