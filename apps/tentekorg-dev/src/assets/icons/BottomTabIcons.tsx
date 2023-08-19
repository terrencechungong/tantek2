import { faCommentDots } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';


export const bottomTabIcons = [
    {
        name: 'Map',
        src: faMapMarkerAlt,
        active: "#096df1",
        inactive: "#ffffff",
    },
    {
        name: 'Circles',
        src: faUsers,
        active: "#096df1",
        inactive: "#ffffff",
    },
    {
        name: 'Messages',
        src: faCommentDots,
        active: "#096df1",
        inactive: "#ffffff",
    }
]