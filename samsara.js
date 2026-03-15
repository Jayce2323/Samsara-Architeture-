// Samsara Architecture
// Event Chain / Chemical Reaction Model
// WAVE IS ALWAYS ACTOR
// DESTRUCTION IS THE ENTITY'S TERM FOR UNIVERSAL HOMEOSTASIS
// ENTROPY IS AN UNACTUALIZED EVENT -> IT IS ENTROPY BECAUSE NO CHANGE = COLLAPSE OF ALL BUT ONE OUTCOME

const MOTION_OOP = {
	"ONE": ["CREATION"],
	"TWO": ["SUMMATION"],
	"THREE": ["DESTRUCTION"],
	"FOUR": ["ENTROPY"]
};

const MOTION = {
	"CONTINUOUS": ["ONE", "TWO", "THREE", "REPEAT"],
	"RESISTED": ["ONE", "TWO", "THREE", "FOUR"]
};

const CREATION_SUMMATION = {
	"CREATION": {
		"ACTOR": "WAVE",
		"CONNOTATION": "-",
		"ENACTED": "WAVE",
		"REACTION": "=",
		"OUTCOME": "PARTICLE"
	},
	"SUMMATION": {
		"ACTOR": "WAVE",
		"CONNOTATION": "-",
		"ENACTED": "PARTICLE",
		"REACTION": "=",
		"OUTCOME": ["PARTICLE", "WAVE"]
	}
};

const DESTRUCTION_ENTROPY = {
	"DESTRUCTION": {
		"ACTOR": "WAVE",
		"CONNOTATION": "+",
		"ENACTED": "WAVE",
		"REACTION": "=",
		"OUTCOME": "HEAT"
	},
	"ENTROPY": {
		"ACTOR": "PARTICLE",
		"CONNOTATION": "+",
		"ENACTED": "WAVE",
		"REACTION": "=",
		"OUTCOME": ["NEUTRAL"]
	}
};

const PARTICLE = ["MATERIAL", "AIR"];

const WAVE = ["CHEMICAL_ELEMENT", "WATER"];

const ESSENCE = {
	"AETHER_LOGIC": ["PRESENCE", "POSITION"],
	"POSITIVE": ["CREATION_SUMMATION"],
	"NEGATIVE": ["DESTRUCTION_ENTROPY"]
};

const MaterialComponents = {
	"WATER": {
		"WaterPressure": {
			"Method_1": {"Variable": "P", "Formula": "Reynolds Number", "Property": "Density"},
			"Method_2": {"Variable": "En", "Formula": "Pauling Electronegativity", "Property": "Hydrogen-Bonding"},
			"Method_3": {"Variable": "Ic", "Formula": "Molecular-Bonding", "Property": "Ion-Character"}
		},
		"Fluidity": {
			"Method_1": {"Variable": "mu", "Formula": "Reynolds Number", "Property": "Viscosity"},
			"Method_2": {"Variable": "tau", "Formula": "Energy-Transfer", "Property": "Shear-Stress-Threshold"},
			"Method_3": {"Variable": "Q", "Formula": "Phase-Shift", "Property": "Heat-Flow"}
		},
		"Hydraulics": {
			"Method_1": {"Variable": "A", "Formula": "Pressure-Force-Area", "Property": "Area"},
			"Method_2": {"Variable": "Q", "Formula": "Darcy Law", "Property": "Discharge"},
			"Method_3": {"Variable": "dy", "Formula": "Vertical-Vector", "Property": "Displacement"}
		}
	},

	"HEAT": {
		"OutputHeat": {
			"Method_1": {"Variable": "v_rms", "Formula": "Thermodynamic RMS", "Property": "Mass/Velocity"},
			"Method_2": {"Variable": "E", "Formula": "Heat-Transfer", "Property": "Radiation"},
			"Method_3": {"Variable": "alpha", "Formula": "Thermal-Expansion", "Property": "Molecular-Bonding"}
		},
		"Combustion": {
			"Method_1": {"Variable": "p", "Formula": "Energy-Density", "Property": "Density"},
			"Method_2": {"Variable": "EA_B", "Formula": "Pauling", "Property": "Energy-Transfer"},
			"Method_3": {"Variable": "T_flash", "Formula": "Ignition-Temp", "Property": "Electromagnetism"}
		},
		"Radiation": {
			"Method_1": {"Variable": "I", "Formula": "Spectral Density", "Property": "Area"},
			"Method_2": {"Variable": "f", "Formula": "Wave Speed", "Property": "Energy-Transfer"},
			"Method_3": {"Variable": "alpha", "Formula": "Absorption Coeff", "Property": "Displacement"}
		}
	},

	"AIR": {
		"AbsorbHeat": {
			"Method_1": {"Variable": "T", "Formula": "v_rms", "Property": "Mass"},
			"Method_2": {"Variable": "kappa", "Formula": "Kinetic-Transfer", "Property": "Convection-Coeff"},
			"Method_3": {"Variable": "E", "Formula": "Youngs-Modulus", "Property": "Molecular-Bonding"}
		},
		"Sound": {
			"Method_1": {"Variable": "A", "Formula": "Wave-Equation", "Property": "Density"},
			"Method_2": {"Variable": "f", "Formula": "Wave-Speed", "Property": "Energy-Transfer"},
			"Method_3": {"Variable": "M", "Formula": "Resonance-Multiplier", "Property": "Radiation"}
		},
		"Aerodynamics": {
			"Method_1": {"Variable": "P", "Formula": "Bulk-Modulus", "Property": "Area"},
			"Method_2": {"Variable": "Re", "Formula": "Reynolds-Number", "Property": "Kinetic-Transfer"},
			"Method_3": {"Variable": "Cd_Cl", "Formula": "Drag-Lift-Coeffs", "Property": "Displacement"}
		}
	},

	"ELECTRICITY": {
		"Voltage": {
			"Method_1": {"Variable": "q", "Formula": "Particle-Charge", "Property": "Mass"},
			"Method_2": {"Variable": "U", "Formula": "Potential-Energy", "Property": "Energy-Transfer"},
			"Method_3": {"Variable": "n", "Formula": "Arc-Capacity", "Property": "Molecular-Bonding"}
		},
		"Light": {
			"Method_1": {"Variable": "I", "Formula": "Spectral Density", "Property": "Density"},
			"Method_2": {"Variable": "f", "Formula": "Wave-Speed", "Property": "Energy-Transfer"},
			"Method_3": {"Variable": "phi", "Formula": "Phase-Coherence", "Property": "Radiation"}
		},
		"Magnetism": {
			"Method_1": {"Variable": "Fm", "Formula": "Magnetic-Force", "Property": "Area"},
			"Method_2": {"Variable": "p", "Formula": "Resistivity", "Property": "Electromagnetism"},
			"Method_3": {"Variable": "ni", "Formula": "Ion-Density", "Property": "Displacement"}
		}
	},

	"SHAPE": {
		"Density": {
			"Method_1": {"Variable": "p", "Formula": "Atomic-Density", "Property": "Mass"},
			"Method_2": {"Variable": "sigma_y", "Formula": "Yield-Strength", "Property": "Molecular-Bonding"},
			"Method_3": {"Variable": "d", "Formula": "Piezoelectric-Const", "Property": "Electromagnetism"}
		},
		"Mass": {
			"Method_1": {"Variable": "g", "Formula": "Grav-Gradient", "Property": "Density"},
			"Method_2": {"Variable": "p", "Formula": "Momentum", "Property": "Energy-Transfer"},
			"Method_3": {"Variable": "sigma", "Formula": "Internal-Stress", "Property": "Radiation"}
		},
		"Friction": {
			"Method_1": {"Variable": "mu_k", "Formula": "Friction-Coeff", "Property": "Area"},
			"Method_2": {"Variable": "zeta", "Formula": "Damping-Ratio", "Property": "Kinetic-Transfer"},
			"Method_3": {"Variable": "TR", "Formula": "Transmissibility-Ratio", "Property": "Displacement"}
		}
	},

	"FORM": {
		"Rigidity": {
			"Method_1": {"Variable": "Gm", "Formula": "Specific-Gravity", "Property": "Mass"},
			"Method_2": {"Variable": "E", "Formula": "Youngs-Modulus", "Property": "Molecular-Bonding"},
			"Method_3": {"Variable": "epsilon", "Formula": "Tensile-Strain", "Property": "Density"}
		},
		"Growth": {
			"Method_1": {"Variable": "MC", "Formula": "Moisture-Content", "Property": "Energy-Transfer"},
			"Method_2": {"Variable": "dH", "Formula": "Regen-Enthalpy", "Property": "Radiation"},
			"Method_3": {"Variable": "Vm", "Formula": "Membrane-Potential", "Property": "Electromagnetism"}
		},
		"Expansion": {
			"Method_1": {"Variable": "Sw", "Formula": "Swelling-Factor", "Property": "Area"},
			"Method_2": {"Variable": "Q", "Formula": "Darcy-Law", "Property": "Kinetic-Transfer"},
			"Method_3": {"Variable": "TR", "Formula": "Transmissibility", "Property": "Displacement"}
		}
	},

	"RESISTANCE": {
		"TensileStrength": {
			"Method_1": {"Variable": "APF", "Formula": "Atomic-Packing", "Property": "Electromagnetism"},
			"Method_2": {"Variable": "Fnet", "Formula": "Bonding-Force", "Property": "Molecular-Bonding"},
			"Method_3": {"Variable": "dL", "Formula": "Youngs-Modulus-Extension", "Property": "Mass"}
		},
		"Conductivity": {
			"Method_1": {"Variable": "rho_e", "Formula": "Resistivity", "Property": "Density"},
			"Method_2": {"Variable": "k", "Formula": "Thermal-Cond", "Property": "Energy-Transfer"},
			"Method_3": {"Variable": "chi_m", "Formula": "Mag-Susceptibility", "Property": "Radiation"}
		},
		"Luster": {
			"Method_1": {"Variable": "R", "Formula": "Reflectance", "Property": "Area"},
			"Method_2": {"Variable": "Hm", "Formula": "Hardness-Index", "Property": "Kinetic-Transfer"},
			"Method_3": {"Variable": "gamma", "Formula": "Plastic-Strain-Rate", "Property": "Displacement"}
		}
	},

	"PRESENCE": {
		"Velocity": {
			"Method_1": {"Variable": "v", "Formula": "Proper-Time-Velocity", "Property": "Mass"},
			"Method_2": {"Variable": "d_tau", "Formula": "Lorentz-Factor", "Property": "Radiation"},
			"Method_3": {"Variable": "a", "Formula": "Chronal-Acceleration", "Property": "Energy-Transfer"}
		},
		"Order": {
			"Method_1": {"Variable": "rho_e", "Formula": "Event-Density", "Property": "Density"},
			"Method_2": {"Variable": "t0", "Formula": "Temporal-Anchor", "Property": "Molecular-Bonding"},
			"Method_3": {"Variable": "dS", "Formula": "Entropy-Change", "Property": "Displacement"}
		},
		"Relativity": {
			"Method_1": {"Variable": "rs", "Formula": "Horizon-Radius", "Property": "Area"},
			"Method_2": {"Variable": "p", "Formula": "Relativistic-Momentum", "Property": "Kinetic-Transfer"},
			"Method_3": {"Variable": "ds2", "Formula": "Spacetime-Interval", "Property": "Displacement"}
		}
	},

	"POSITION": {
		"Position": {
			"Method_1": {"Variable": "I", "Formula": "Inertia-Resistance", "Property": "Mass"},
			"Method_2": {"Variable": "r", "Formula": "Coordinate-Vector", "Property": "Electromagnetism"},
			"Method_3": {"Variable": "P", "Formula": "Phase-Shift-Multiplier", "Property": "Molecular-Bonding"}
		},
		"Volume": {
			"Method_1": {"Variable": "rho_v", "Formula": "Volumetric-Density", "Property": "Density"},
			"Method_2": {"Variable": "g", "Formula": "Local-Gravity", "Property": "Energy-Transfer"},
			"Method_3": {"Variable": "L", "Formula": "Metric-Length", "Property": "Area"}
		},
		"Topology": {
			"Method_1": {"Variable": "B", "Formula": "Boundary-Cohesion", "Property": "Area"},
			"Method_2": {"Variable": "v", "Formula": "Deflection-Vector", "Property": "Kinetic-Transfer"},
			"Method_3": {"Variable": "Curv", "Formula": "Curvature-Intensity", "Property": "Displacement"}
		}
	}
};

module.exports = {
	MOTION_OOP,
	MOTION,
	CREATION_SUMMATION,
	DESTRUCTION_ENTROPY,
	PARTICLE,
	WAVE,
	ESSENCE,
	MaterialComponents
};
