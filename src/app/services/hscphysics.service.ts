import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HscphysicsService {

  constructor() { }

  getQuestions(url: string){
    // Module 5
    if (url === 'Projectile Motion'){
      return [
        {
          questionNumber: 1,
          questionBody: 'Projectile Motion Q1',
          questionImage: '',
          questionMarks: 2,
        },
        {
          questionNumber: 2,
          questionBody: 'Projectile Motion Q2',
          questionImage: '',
          questionMarks: 3,
        }
      ]
    }
    if (url === 'Circular Motion'){
      return [
        {
          questionNumber: 1,
          questionBody: 'Circular Motion Q1',
          questionImage: '',
          questionMarks: 2,
        },
        {
          questionNumber: 2,
          questionBody: 'Circular Motion Q2',
          questionImage: '',
          questionMarks: 3,
        }
      ]
    }
    if (url === 'Motion in Gravitational Fields'){
      return [
        {
          questionNumber: 1,
          questionBody: 'Gravitational Fields Q1',
          questionImage: '',
          questionMarks: 2,
        },
        {
          questionNumber: 2,
          questionBody: 'Gravitational Fields Q2',
          questionImage: '',
          questionMarks: 3,
        }
      ]
    }
    
    // Module 6
    if (url === 'Charged Particles, Conductors and Electric and Magnetic Fields'){
      return [
        {
          questionNumber: 1,
          questionBody: 'Charged Particles Q1',
          questionImage: '',
          questionMarks: 2,
        },
        {
          questionNumber: 2,
          questionBody: 'Charged Particles Q2',
          questionImage: '',
          questionMarks: 3,
        }
      ]
    }
    if (url === 'The Motor Effect'){
      return [
        {
          questionNumber: 1,
          questionBody: 'Motor Effect Q1',
          questionImage: '',
          questionMarks: 2,
        },
        {
          questionNumber: 2,
          questionBody: 'Motor Effect Q2',
          questionImage: '',
          questionMarks: 3,
        }
      ]
    }
    if (url === 'Electromagnetic Induction'){
      return [
        {
          questionNumber: 1,
          questionBody: 'Electromagnetic Induction Q1',
          questionImage: '',
          questionMarks: 2,
        },
        {
          questionNumber: 2,
          questionBody: 'Electromagnetic Induction Q2',
          questionImage: '',
          questionMarks: 3,
        }
      ]
    }
    if (url === 'Applications of the Motor Effect'){
      return [
        {
          questionNumber: 1,
          questionBody: 'Applications of Motor Effect Q1',
          questionImage: '',
          questionMarks: 2,
        },
        {
          questionNumber: 2,
          questionBody: 'Applications of Motor Effect Q2',
          questionImage: '',
          questionMarks: 3,
        }
      ]
    }

    // Module 7
    if (url === 'Electromagnetic Spectrum'){
      return [
        {
          questionNumber: 1,
          questionBody: 'Electromagnetic Spectrum Q1',
          questionImage: '',
          questionMarks: 2,
        },
        {
          questionNumber: 2,
          questionBody: 'Electromagnetic Spectrum Q2',
          questionImage: '',
          questionMarks: 3,
        }
      ]
    }
    if (url === 'Wave Model'){
      return [
        {
          questionNumber: 1,
          questionBody: 'Wave Model Q1',
          questionImage: '',
          questionMarks: 2,
        },
        {
          questionNumber: 2,
          questionBody: 'Wave Model Q2',
          questionImage: '',
          questionMarks: 3,
        }
      ]
    }
    if (url === 'Quantum Model'){
      return [
        {
          questionNumber: 1,
          questionBody: 'Quantum Model Q1',
          questionImage: '',
          questionMarks: 2,
        },
        {
          questionNumber: 2,
          questionBody: 'Quantum Model Q2',
          questionImage: '',
          questionMarks: 3,
        }
      ]
    }
    if (url === 'Light and Special Relativity'){
      return [
        {
          questionNumber: 1,
          questionBody: 'Light and Special Relativity Q1',
          questionImage: '',
          questionMarks: 2,
        },
        {
          questionNumber: 2,
          questionBody: 'Light and Special Relativity Q2',
          questionImage: '',
          questionMarks: 3,
        }
      ]
    }

    // Module 8
    if (url === 'Origins of the Elements'){
      return [
        {
          questionNumber: 1,
          questionBody: 'Origins of the Elements Q1',
          questionImage: '',
          questionMarks: 2,
        },
        {
          questionNumber: 2,
          questionBody: 'Origins of the Elements Q2',
          questionImage: '',
          questionMarks: 3,
        }
      ]
    }
    if (url === 'Structure of the Atom'){
      return [
        {
          questionNumber: 1,
          questionBody: 'Structure of the Atom Q1',
          questionImage: '',
          questionMarks: 2,
        },
        {
          questionNumber: 2,
          questionBody: 'Structure of the Atom Q2',
          questionImage: '',
          questionMarks: 3,
        }
      ]
    }
    if (url === 'Quantum Mechanical Nature of the Atom'){
      return [
        {
          questionNumber: 1,
          questionBody: 'Quantum Mechanical Nature of the Atom Q1',
          questionImage: '',
          questionMarks: 2,
        },
        {
          questionNumber: 2,
          questionBody: 'Quantum Mechanical Nature of the Atom Q2',
          questionImage: '',
          questionMarks: 3,
        }
      ]
    }
    if (url === 'Properties of the Nucleus'){
      return [
        {
          questionNumber: 1,
          questionBody: 'Properties of the Nucleus Q1',
          questionImage: '',
          questionMarks: 2,
        },
        {
          questionNumber: 2,
          questionBody: 'Properties of the Nucleus Q2',
          questionImage: '',
          questionMarks: 3,
        }
      ]
    }
    if (url === 'Deep Inside the Atom'){
      return [
        {
          questionNumber: 1,
          questionBody: 'Deep Inside the Atom Q1',
          questionImage: '',
          questionMarks: 2,
        },
        {
          questionNumber: 2,
          questionBody: 'Deep Inside the Atom Q2',
          questionImage: '',
          questionMarks: 3,
        }
      ]
    }





    // If all else fails
    return

  }
}
