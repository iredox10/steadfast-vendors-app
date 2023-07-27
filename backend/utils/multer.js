import multer from 'multer'
import {uuid} from 'uuidv4'

const Dir = './public/'

const Storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,Dir)
    },
    filename:(req,file,cb) =>{
        const filename =file.originalname.toLocaleLowerCase().split(' ').join('-')
        cb(null, uuid() + '-' + filename)
    }
})

export const upload = multer({
    storage: Storage,
    fileFilter: (req,file,cb)=>{
        if(file.mimetype == 'image/png' || file.mimetype == 'image/jpg' || file.mimetype == 'image/jpeg' ){
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
    }
})