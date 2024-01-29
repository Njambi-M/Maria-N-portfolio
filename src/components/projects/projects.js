import 'bootstrap/dist/css/bootstrap.min.css';
import "./projects.css";


export default function Projects(){
    const galleryData = [
        { id: 1, imageUrl: '', title: 'Mental Health Chatbot', text: 'Chatbot that aims at improving the mental well-being of individuals',link: 'https://github.com/Njambi-M/Mental-health-chatbot' },
        { id: 2, imageUrl: '', title: 'Resturant Website', text: 'Website that allows one to order food and have the order processed', link: 'https://github.com/Njambi-M/online-resturant' },
        { id: 3, imageUrl: '', title: 'Blood Donation Website', text: 'Website that automates the blood donation process', link: 'https://github.com/Njambi-M/Blood-Donation-System' },
        { id: 4, imageUrl: '', title: 'System Analysis Project', text: 'System analysis project for an online thrift store' },
        { id: 5, imageUrl: '', title: 'Leave Request Website', text: 'Website that automates the leave request process' },
        { id: 6, imageUrl: '', title: 'NLP Classification Pipeline', text: 'NLP text classification pipelines', link: 'https://github.com/Njambi-M/NLP-model' },
        
      ];
    
    return(
        <div className="container">
        <div className="row">
          {galleryData.map((item) => (
            <div key={item.id} className="col-md-4 mb-4">
              <div className="card">
                <img src={item.imageUrl} className="card-img-top" alt={item.title} />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.text}</p>
                  <a href={item.link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Github</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    );
}