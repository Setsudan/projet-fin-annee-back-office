<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class ProductionItemFactory extends Factory
{
    private const INSTRUMENT_DESCRIPTIONS = [
        'piano' => ['Grand piano', 'Upright piano', 'Electric piano'],
        'guitar' => ['Acoustic guitar', 'Electric guitar', 'Bass guitar'],
        'flute' => ['Flute', 'Piccolo', 'Alto flute'],
        'drums' => ['Drum set', 'Snare drum', 'Bass drum'],
        'saxophone' => ['Alto saxophone', 'Tenor saxophone', 'Soprano saxophone'],
        'clarinet' => ['Bb clarinet', 'A clarinet', 'Eb clarinet'],
        'trumpet' => ['Bb trumpet', 'C trumpet', 'Eb trumpet'],
    ];

    private const INSTRUMENT_STATES = [
        'new', 'used', 'broken', 'lost', 'stolen', 'in repair',
    ];

    private const INSTRUMENT_TYPES = [
        'piano', 'guitar', 'flute', 'drums', 'saxophone', 'clarinet', 'trumpet',
    ];

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $type = $this->faker->randomElement(self::INSTRUMENT_TYPES);

        return [
            'description' => $this->faker->randomElement(self::INSTRUMENT_DESCRIPTIONS[$type]),
            'quantity' => $this->faker->numberBetween(1, 5),
            'state' => $this->faker->randomElement(self::INSTRUMENT_STATES),
            'type' => $type,
        ];
    }
}
