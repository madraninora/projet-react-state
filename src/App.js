import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "Jean Dupont",
        bio: "Un développeur de logiciels passionné avec 5 ans d'expérience en React, Node.js et technologies web modernes. J'aime créer des applications conviviales et résoudre des problèmes complexes.",
        imgSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
        profession: "Développeur de Logiciels"
      },
      shows: false,
      timeSinceMount: 0
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState(prevState => ({
        timeSinceMount: prevState.timeSinceMount + 1
      }));
    }, 1000);
  }

  componentWillUnmount() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  toggleProfile = () => {
    this.setState(prevState => ({
      shows: !prevState.shows
    }));
  }

  render() {
    const { person, shows, timeSinceMount } = this.state;

    return (
      <div className="min-h-screen bg-gray-100 py-8">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
              Application de Profil Personnel
            </h1>
            
            {/* Affichage du Timer */}
            <div className="text-center mb-6">
              <p className="text-lg text-gray-600">
                Temps écoulé depuis le montage : <span className="font-semibold text-blue-600">{timeSinceMount}</span> secondes
              </p>
            </div>

            {/* Bouton de Basculement */}
            <div className="text-center mb-8">
              <button
                onClick={this.toggleProfile}
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-md"
              >
                {shows ? 'Masquer le Profil' : 'Afficher le Profil'}
              </button>
            </div>

            {/* Profil de la Personne */}
            {shows && (
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
                  {/* Image de Profil */}
                  <div className="flex-shrink-0">
                    <img
                      src={person.imgSrc}
                      alt={person.fullName}
                      className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
                    />
                  </div>
                  
                  {/* Informations du Profil */}
                  <div className="flex-1 text-center md:text-left">
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">
                      {person.fullName}
                    </h2>
                    <p className="text-lg text-blue-600 font-semibold mb-3">
                      {person.profession}
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      {person.bio}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
