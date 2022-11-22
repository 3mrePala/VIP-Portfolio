import MailSVG from '../assets/icons/MAILicon.svg'
import EmailIcon from '@mui/icons-material/Email';

function StickyIcons() {
  return (
    <div>
      <a href="#contact">
        <EmailIcon className="landing__iconcontainer mailicon" fontSize='large' />
      </a>
    </div>
  );
}

export default StickyIcons;
