import './Announcer.css'
import { useTypedMessage } from '../../hooks/useTypedMessage'


const Announcer = ({message}) => {

    const typedMessage = useTypedMessage(message)

    return (
        <section>
            <article className='announcer-message'>{typedMessage}</article>
        </section>

    )
}

export default Announcer;