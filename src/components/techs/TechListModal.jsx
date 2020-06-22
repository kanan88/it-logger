import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

const TechItem = ({tech}) => {
    return (
        <li className="collection-item">
            <div>
                {tech.firstName} {tech.lastName}
                <a href="#" className="secondary-content">
                    <i className="material-icons grey-text">delete</i>
                </a>
            </div>
        </li>
    );
};

TechItem.propTypes = {
    tech: PropTypes.object.isRequired,
}

const TechListModal = () => {
    const [techs, setTechs] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getTechs();
        // eslint-disable-next-line
    }, [])

    const getTechs = async () => {
        setLoading(true);
        const res = await fetch('/techs');
        const data = await res.json();

        setTechs(data);
        setLoading(false);
    }

    return (
        <div id="tech-list-modal" className="modal">
            <div className="modal-content">
                <h4>Technician List</h4>
                <ul className="collection">
                    {!loading && techs.map(tech => (
                        <TechItem key={tech.id} tech={tech} />
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TechListModal;