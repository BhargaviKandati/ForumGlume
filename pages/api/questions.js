// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { v4 as uuidv4} from 'uuid'
export default function handler(req, res) {
    const Questions = [
        {
            id:uuidv4(),
            question:"1. There is a minute cyst in a persons heart",
            description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
            user_name:"Ram",
            user_skill:"Heart Surgon, MBBS, London",
            time:"10 hrs ago"
        },
        {
            id:uuidv4(),
            question:"2. There is a minute cyst in a persons heart",
            description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
            user_name:"Ravi",
            user_skill:"Heart Surgon, MBBS, London",
            time:"12 hrs ago"
        },
        {
            id:uuidv4(),
            question:"3. There is a minute cyst in a persons heart",
            description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
            user_name:"Gaurav",
            user_skill:"Heart Surgon, MBBS, London",
            time:"14 hrs ago"
        },
        {
            id:uuidv4(),
            question:"4. There is a minute cyst in a persons heart",
            description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
            user_name:"Bhargavi",
            user_skill:"Heart Surgon, MBBS, London",
            time:"15 hrs ago"
        },
        {
            id:uuidv4(),
            question:"5. There is a minute cyst in a persons heart",
            description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
            user_name:"Renuka",
            user_skill:"Heart Surgon, MBBS, London",
            time:"a day ago"
        }

    ]
    res.status(200).json(Questions)
  }
  