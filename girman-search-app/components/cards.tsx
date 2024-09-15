import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { MapPin, Phone } from "lucide-react";
import { ObjectId } from "mongodb";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import styles from "../styles/search.module.css"

interface User {
    _id: ObjectId;
    first_name: string;
    last_name: string;
    city: string;
    contact_number: string;
}

const Cards = ({user} : {user: User}) => {
    const name = user.first_name + " " + user.last_name
    return ( 
        <Card key={user._id.toString()}>
            <CardHeader className="flex flex-row items-center gap-4">
            <Avatar>
                    {/* <AvatarImage src={user.user_profile_image} alt={name} /> */}
                    <AvatarFallback>{name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
                    <h2 className="text-lg font-semibold">{name}</h2>
                    <p className="text-sm text-muted-foreground flex items-center">
                    <MapPin className="h-4 w-4 mr-1" /> {user.city}
                    </p>
            </div>
            </CardHeader>
            <CardFooter className='flex justify-between'>
                <div>
                    <p className="flex items-center text-sm">
                    <Phone className="h-4 w-4 mr-1" /> {user.contact_number}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">Available on phone</p>
                </div>

                <Dialog>
                <DialogTrigger asChild>
                    <Button className="w-half">Fetch Details</Button>
                </DialogTrigger>
                <DialogContent className="bg-white text-black">
                    <DialogHeader>
                    <DialogTitle>Fetch Details</DialogTitle>
                    <DialogDescription>
                        Here are the details of following employee.
                    </DialogDescription>
                    </DialogHeader>
                    <div className={styles.imgdiv}>
                            <img src="Ellipse 53.png" alt="Profile Picture" className={styles.image}/>
                    </div>
                    <div className="flex flex-col space-y-3">
                    <span>
                        <b>Name: </b>{name}
                    </span>
                    <span><b>Location: </b> {user.city}</span>
                    <span><b>Contact Number: </b> {user.contact_number}</span>
                    </div>
                </DialogContent>
                </Dialog>
            {/* <Button className="w-half">Fetch Details</Button> */}
            </CardFooter>
    </Card>
     );
}
 
export default Cards;