import './collapse.scss'
import arrow from '../../assets/arrow.png';
import { useState } from 'react';

/**
 * A collapsible component that displays a title and content that can be toggled.
 * @param {Object} props - The component props.
 * @param {string} props.title - The title of the collapse component.
 * @param {string[]|string} props.content - The content of the collapse component. It can be either a string or an array of strings.
 * @returns {JSX.Element} The Collapse component.
 */
export default function Collapse({ title, content }) {
    const [toggle, setToggle] = useState(false);
    return (
        <>
            <div className="collapse" >
                <h3 className='collapse_title' onClick={() => setToggle(!toggle)} >
                    {title}
                    <img
                        className={toggle ? 'arrow arrow_up' : 'arrow arrow_down'}
                        src={arrow}
                        alt="show content"
                    />
                </h3>
                <div className={toggle ? 'collapse_content' : 'collapse_content_hidden'}>
                    {Array.isArray(content) ? content.map((item, index) => {
                        return (
                            <p key={index}>{item}</p>
                        )
                    }) : content
                    }
                </div>
            </div>
        </>
    )
}
