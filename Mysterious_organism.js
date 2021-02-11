// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single stand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }
  
  // Retuns an object
  const pAequorFactory = (number, dna_array) => {
    return ({
      specimenNum: number,
      dna: dna_array,
      mutate() {
        let index = Math.floor(Math.random() * this.dna.length)
        console.log(`Current dna is: ${this.dna}`)
        console.log(`Changing a base at index ${index}`)

        let random_dna = returnRandBase()
        while (random_dna === this.dna[index]) {
            random_dna = returnRandBase()
        }
        this.dna.splice(index, 1, random_dna)
        console.log(`New base is: ${this.dna}`)
      },
      compareDNA(pAequorObj) {
        let count_equal_bases = 0;
        for (let i = 0; i < pAequorObj.dna.length - 1; i++) {
            if (i === 0) {
              console.log(`Comparing this specie: \n
                Specie: ${this.specimenNum}, DNA: ${this.dna} `)
              console.log(`With this specie: \n
               Specia: ${pAequorObj.specimenNum}, DNA: ${pAequorObj.dna}`)
            }
            if (this.dna[i] === pAequorObj.dna[i]) {
              count_equal_bases++
            }
        }
        let percent_equal = Math.floor((count_equal_bases / 15) * 100)
        console.log(`Specie ${this.specimenNum} and specie ${pAequorObj.specimenNum}
          are: ${percent_equal}% equal`) 
      },
      willLikelySurvive() {
        count_good_bases = 0;
          for (let i = 0; i < this.dna.length - 1; i++) {
            if (this.dna[i] === 'G' || this.dna[i] === 'C'){
              count_good_bases++
            }
          }
        return count_good_bases > 9? true : false  
      }
    })
  }

  poolOfSample = () => {
    let samples = [];
    for (let i = 0; samples.length < 30 ; i++) {
      let sample = pAequorFactory(i, mockUpStrand())
      if (sample.willLikelySurvive()){
        samples.push(sample)
      }
    }
    return samples
  }

  //console.log(poolOfSample())



