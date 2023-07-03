require('use-strict')

class Material {
  constructor (Kennzeichnung, Parameter, Visual) {
    this.Kennzeichnung = Kennzeichnung
    this.Parameter = Parameter
    this.Visual = Visual
    this.data = {
      Silber: {
        ρ: ['0.016 ohm*mm^2/m'],
        κ: ['62.5 S*m/mm^2'],
        δ0: ['243 K'],
        α20: ['0.038 K^-1'],
        β20: ['0.0000007 K/K^3']
      },
      Kupfer: {
        ρ: ['0.01786 ohm*mm^2/m'],
        κ: ['56 S*m/mm^2'],
        δ0: ['237 K'],
        α20: ['0.00393 K^-1'],
        β20: ['0.0000006 K/K^3']
      },
      Bronze: {
        ρ: ['0.018 ohm*mm^2/m'],
        κ: ['55 S*m/mm^2', '18 S*m/mm^2'],
        δ0: ['-'],
        α20: ['-'],
        β20: ['-']
      },
      Gold: {
        ρ: ['0.023 ohm*mm^2/m'],
        κ: ['44 S*m/mm^2'],
        δ0: ['230 K'],
        α20: ['0.004 K^-1'],
        β20: ['0.0000005 K/K^3']
      },
      Aluminium: {
        ρ: ['0.02857 ohm*mm^2/m'],
        κ: ['35 S*m/mm^2'],
        δ0: ['245 K'],
        α20: ['0.00377 K^-1'],
        β20: ['0.0000013 K/K^3']
      },
      Magnesium: {
        ρ: ['0.045 ohm*mm^2/m'],
        κ: ['22 S*m/mm^2'],
        δ0: ['237 K'],
        α20: ['0.0039 K^-1'],
        β20: ['0.000001 K/K^3']
      },
      Wolfram: {
        ρ: ['0.055 ohm*mm^2/m'],
        κ: ['18 S*m/mm^2'],
        δ0: ['225 K'],
        α20: ['0.0041 K^-1'],
        β20: ['0.000001 K/K^3']
      },
      Zink: {
        ρ: ['0.063 ohm*mm^2/m'],
        κ: ['16 S*m/mm^2'],
        δ0: ['250 K'],
        α20: ['0.0037 K^-1'],
        β20: ['0.000002 K/K^3']
      },
      Messing: {
        ρ: ['0.07 ohm*mm^2/m'],
        κ: ['14,11 S*m/mm^2'],
        δ0: ['650 K'],
        α20: ['0.0015 K^-1'],
        β20: ['-']
      },
      Nickel: {
        ρ: ['0.08 ohm*mm^2/m'],
        κ: ['13,9 S*m/mm^2'],
        δ0: ['250 K', '145 K'],
        α20: ['0.0037 K^-1', '0.006 K^-1'],
        β20: ['0.000009 K/K^3']
      },
      Eisen: {
        ρ: ['0.10 ohm*mm^2/m'],
        κ: ['10,7 S*m/mm^2'],
        δ0: ['202 K', '145 K'],
        α20: ['0.0045 K^-1', '0.006 K^-1'],
        β20: ['0.000006 K/K^3']
      },
      Zinn: {
        ρ: ['0.11 ohm*mm^2/m'],
        κ: ['9.1 S*m/mm^2'],
        δ0: ['218 K'],
        α20: ['0.0042 K^-1'],
        β20: ['0.000006 K/K^3']
      },
      Platin: {
        ρ: ['0.11 ohm*mm^2/m'],
        κ: ['9 S*m/mm^2', '7 S*m/mm^2'],
        δ0: ['480 K', '310 K'],
        α20: ['0.002 K^-1', '0.003 K^-1'],
        β20: ['0.0000006 K/K^3']
      },
      Blei: {
        ρ: ['0.21 ohm*mm^2/m'],
        κ: ['4.8 S*m/mm^2'],
        δ0: ['218 K'],
        α20: ['0.0042 K^-1'],
        β20: ['0.000002 K/K^3']
      },
      Neusilber: {
        ρ: ['0.3 ohm*mm^2/m'],
        κ: ['3.33 S*m/mm^2'],
        δ0: ['-'],
        α20: ['0.00035 K^-1'],
        β20: ['-']
      },
      GoldChrom: {
        ρ: ['0.33 ohm*mm^2/m'],
        κ: ['3.0 S*m/mm^2'],
        δ0: ['-'],
        α20: ['-0.00001 K^-1'],
        β20: ['0.0000001 K/K^3']
      },
      Nickelin: {
        ρ: ['0.43 ohm*mm^2/m'],
        κ: ['2.3 S*m/mm^2'],
        δ0: ['-'],
        α20: ['0.00011 K^-1'],
        β20: ['-']
      },
      Manganin: {
        ρ: ['0.43 ohm*mm^2/m'],
        κ: ['2.3 S*m/mm^2'],
        δ0: ['-'],
        α20: ['0.00004 K^-1'],
        β20: ['-']
      },
      Novokonstant: {
        ρ: ['0.45 ohm*mm^2/m'],
        κ: ['2.2 S*m/mm^2'],
        δ0: ['-'],
        α20: ['0.00001 K^-1'],
        β20: ['-']
      },
      Rheotan: {
        ρ: ['0.47 ohm*mm^2/m'],
        κ: ['2.15 S*m/mm^2'],
        δ0: ['-'],
        α20: ['0.00023 K^-1'],
        β20: ['-']
      },
      Isabellin: {
        ρ: ['0.5 ohm*mm^2/m'],
        κ: ['2.00 S*m/mm^2'],
        δ0: ['-'],
        α20: ['0.00003 K^-1'],
        β20: ['-']
      },
      Konstantan: {
        ρ: ['0.48 ohm*mm^2/m'],
        κ: ['2.00 S*m/mm^2'],
        δ0: ['-'],
        α20: ['-0.0000035 K^-1'],
        β20: ['-']
      },
      Resistin: {
        ρ: ['0.5 ohm*mm^2/m'],
        κ: ['2.00 S*m/mm^2'],
        δ0: ['-'],
        α20: ['-0.00002 K^-1', '0.00002 K^-1'],
        β20: ['-']
      },
      Kruppin: {
        ρ: ['0.85 ohm*mm^2/m'],
        κ: ['1.18 S*m/mm^2'],
        δ0: ['-'],
        α20: ['0.0007 K^-1'],
        β20: ['-']
      },
      Quecksilber: {
        ρ: ['0.96 ohm*mm^2/m'],
        κ: ['1.04 S*m/mm^2'],
        δ0: ['-'],
        α20: ['0.00092 K^-1'],
        β20: ['0.0000012 K/K^3']
      },
      Chromnickel: {
        ρ: ['1.1 ohm*mm^2/m'],
        κ: ['0.91 S*m/mm^2'],
        δ0: ['-'],
        α20: ['0.0002 K^-1'],
        β20: ['-']
      },
      Wismut: {
        ρ: ['1.2 ohm*mm^2/m'],
        κ: ['0.83 S*m/mm^2'],
        δ0: ['218 K'],
        α20: ['0.0042 K^-1'],
        β20: ['-']
      },
      Glas: {
        ρ: ['10E16 ohm cm', '10E21 ohm cm'],
        κ: [''],
        δ0: [''],
        α20: [''],
        β20: ['']
      }
    }
  }

  fρ (name) {
    return this.data[name]['ρ']
  }

  fκ (name) {
    return this.data[name]['κ']
  }

  fδ0 (name) {
    return this.data[name]['δ0']
  }

  fα20 (name) {
    return this.data[name]['α20']
  }

  fβ20 (name) {
    return this.data[name]['β20']
  }
}

exports.Material = Material
