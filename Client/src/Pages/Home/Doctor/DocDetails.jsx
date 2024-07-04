import { useLoaderData } from "react-router-dom";
import {
    Card,
    CardBody,
    Typography,
    Avatar,
    Chip,
    List,
    ListItem,
    ListItemPrefix,
} from "@material-tailwind/react";
import { MdLocationOn, MdPhone, MdLanguage, MdSchool, MdAccessTime, MdPayment } from "react-icons/md";
import { FaAward, FaBookMedical, FaHospitalUser, FaStar } from "react-icons/fa";
import { SiGooglecalendar } from "react-icons/si";

const DocDetails = () => {
    const data = useLoaderData();

    const {
        name,
        profilePicture,
        contact,
        location,
        specialties,
        experience,
        memberships,
        languages,
        bio,
        education,
        services,
        hours,
        booking,
        reviews,
        insurance,
        payment,
        awards,
        research,
        community,
        socialMedia,
    } = data;

    return (
        <div className="max-w-7xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-md grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="col-span-1 md:col-span-2 flex items-center space-x-4">
                <Avatar src={profilePicture} alt={name} size="xl" />
                <div>
                    <Typography variant="h4" className="font-bold">{name}</Typography>
                    <Typography variant="subtitle1" className="text-gray-500 flex items-center gap-2">
                        <MdLocationOn className="text-red-500" /> {location}
                    </Typography>
                </div>
            </div>
            <Card>
                <CardBody>
                    <Typography variant="h6" className="font-bold mb-2 flex items-center gap-2">
                        <MdPhone className="text-green-500" /> Contact
                    </Typography>
                    <Typography variant="body1">{contact}</Typography>
                </CardBody>
            </Card>
            <Card>
                <CardBody>
                    <Typography variant="h6" className="font-bold mb-2 flex items-center gap-2">
                        <FaBookMedical className="text-blue-500" /> Specialties
                    </Typography>
                    <Chip value={specialties} color="blue" />
                </CardBody>
            </Card>
            <Card>
                <CardBody>
                    <Typography variant="h6" className="font-bold mb-2 flex items-center gap-2">
                        <FaStar className="text-yellow-500" /> Experience
                    </Typography>
                    <Typography variant="body1">{experience}</Typography>
                </CardBody>
            </Card>
            <Card>
                <CardBody>
                    <Typography variant="h6" className="font-bold mb-2 flex items-center gap-2">
                        <FaHospitalUser className="text-purple-500" /> Memberships
                    </Typography>
                    <Typography variant="body1">{memberships}</Typography>
                </CardBody>
            </Card>
            <Card>
                <CardBody>
                    <Typography variant="h6" className="font-bold mb-2 flex items-center gap-2">
                        <MdLanguage className="text-red-500" /> Languages
                    </Typography>
                    <Typography variant="body1">{languages}</Typography>
                </CardBody>
            </Card>
            <Card>
                <CardBody>
                    <Typography variant="h6" className="font-bold mb-2">Bio</Typography>
                    <Typography variant="body1">{bio}</Typography>
                </CardBody>
            </Card>
            <Card>
                <CardBody>
                    <Typography variant="h6" className="font-bold mb-2 flex items-center gap-2">
                        <MdSchool className="text-blue-500" /> Education
                    </Typography>
                    <Typography variant="body1">{education}</Typography>
                </CardBody>
            </Card>
            <Card>
                <CardBody>
                    <Typography variant="h6" className="font-bold mb-2">Services</Typography>
                    <Typography variant="body1">{services}</Typography>
                </CardBody>
            </Card>
            <Card>
                <CardBody>
                    <Typography variant="h6" className="font-bold mb-2 flex items-center gap-2">
                        <MdAccessTime className="text-orange-500" /> Hours
                    </Typography>
                    <Typography variant="body1">{hours}</Typography>
                </CardBody>
            </Card>
            <Card>
                <CardBody>
                    <Typography variant="h6" className="font-bold mb-2 flex items-center gap-2">
                        <SiGooglecalendar className="text-green-500" /> Booking
                    </Typography>
                    <Typography variant="body1">{booking}</Typography>
                </CardBody>
            </Card>
            <Card>
                <CardBody>
                    <Typography variant="h6" className="font-bold mb-2">Reviews</Typography>
                    <Typography variant="body1">{reviews}</Typography>
                </CardBody>
            </Card>
            <Card>
                <CardBody>
                    <Typography variant="h6" className="font-bold mb-2">Insurance</Typography>
                    <Typography variant="body1">{insurance}</Typography>
                </CardBody>
            </Card>
            <Card>
                <CardBody>
                    <Typography variant="h6" className="font-bold mb-2 flex items-center gap-2">
                        <MdPayment className="text-blue-500" /> Payment
                    </Typography>
                    <Typography variant="body1">{payment}</Typography>
                </CardBody>
            </Card>
            <Card>
                <CardBody>
                    <Typography variant="h6" className="font-bold mb-2 flex items-center gap-2">
                        <FaAward className="text-yellow-500" /> Awards
                    </Typography>
                    <Typography variant="body1">{awards}</Typography>
                </CardBody>
            </Card>
            <Card>
                <CardBody>
                    <Typography variant="h6" className="font-bold mb-2">Research</Typography>
                    <Typography variant="body1">{research}</Typography>
                </CardBody>
            </Card>
            <Card>
                <CardBody>
                    <Typography variant="h6" className="font-bold mb-2">Community</Typography>
                    <Typography variant="body1">{community}</Typography>
                </CardBody>
            </Card>
            <Card>
                <CardBody>
                    <Typography variant="h6" className="font-bold mb-2">Social Media</Typography>
                    <List>
                        {Object.entries(socialMedia).map(([platform, link]) => (
                            <ListItem key={platform}>
                                <ListItemPrefix>
                                    <i className="material-icons">{platform}</i>
                                </ListItemPrefix>
                                <Typography component="a" href={link} target="_blank" rel="noopener noreferrer">
                                    {platform}
                                </Typography>
                            </ListItem>
                        ))}
                    </List>
                </CardBody>
            </Card>
        </div>
    );
};

export default DocDetails;
