<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class ProductionItemFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $instrumentTypes = [
            'piano', 'guitar', 'violin', 'flute', 'drums', 'saxophone', 'clarinet', 'trumpet',
            'cello', 'bass', 'percussion', 'choir', 'accordion', 'harp', 'trombone', 'organ',
            'horn', 'vibraphone', 'banjo', 'mandolin', 'camera', 'boom microphone', 'lighting equipment',
            'film slate', 'clapperboard', 'dolly', 'jib crane', 'green screen'
        ];

        $type = $this->faker->randomElement($instrumentTypes);

        $description = '';
        switch ($type) {
            case 'piano':
                $description = $this->faker->randomElement(['Grand piano', 'Upright piano', 'Electric piano']);
                break;
            case 'guitar':
                $description = $this->faker->randomElement(['Acoustic guitar', 'Electric guitar', 'Bass guitar']);
                break;
            case 'violin':
                $description = $this->faker->randomElement(['Violin', 'Fiddle']);
                break;
            case 'flute':
                $description = $this->faker->randomElement(['Flute', 'Piccolo', 'Alto flute']);
                break;
            case 'drums':
                $description = $this->faker->randomElement(['Drum set', 'Snare drum', 'Bass drum']);
                break;
            case 'saxophone':
                $description = $this->faker->randomElement(['Alto saxophone', 'Tenor saxophone', 'Soprano saxophone']);
                break;
            case 'clarinet':
                $description = $this->faker->randomElement(['Bb clarinet', 'A clarinet', 'Eb clarinet']);
                break;
            case 'trumpet':
                $description = $this->faker->randomElement(['Bb trumpet', 'C trumpet', 'Piccolo trumpet']);
                break;
            case 'cello':
                $description = $this->faker->randomElement(['Cello', 'Electric cello']);
                break;
            case 'bass':
                $description = $this->faker->randomElement(['Electric bass', 'Upright bass']);
                break;
            case 'percussion':
                $description = $this->faker->randomElement(['Drum set', 'Congas', 'Marimba']);
                break;
            case 'choir':
                $description = $this->faker->randomElement(['Choir', 'Vocal ensemble']);
                break;
            case 'accordion':
                $description = $this->faker->randomElement(['Accordion', 'Button accordion']);
                break;
            case 'harp':
                $description = $this->faker->randomElement(['Concert harp', 'Celtic harp']);
                break;
            case 'trombone':
                $description = $this->faker->randomElement(['Tenor trombone', 'Bass trombone']);
                break;
            case 'organ':
                $description = $this->faker->randomElement(['Pipe organ', 'Electronic organ']);
                break;
            case 'horn':
                $description = $this->faker->randomElement(['French horn', 'Mellophone']);
                break;
            case 'vibraphone':
                $description = $this->faker->randomElement(['Vibraphone', 'Marimba']);
                break;
            case 'banjo':
                $description = $this->faker->randomElement(['Banjo', 'Tenor banjo']);
                break;
            case 'mandolin':
                $description = $this->faker->randomElement(['Mandolin', 'Octave mandolin']);
                break;
            case 'camera':
                $description = $this->faker->randomElement(['Digital camera', 'Film camera']);
                break;
            case 'boom microphone':
                $description = $this->faker->randomElement(['Boom microphone', 'Shotgun microphone']);
                break;
            case 'lighting equipment':
                $description = $this->faker->randomElement(['Stage lights', 'Film lighting kit']);
                break;
            case 'film slate':
                $description = $this->faker->randomElement(['Film slate', 'Clapperboard']);
                break;
            case 'dolly':
                $description = $this->faker->randomElement(['Camera dolly', 'Track dolly']);
                break;
            case 'jib crane':
                $description = $this->faker->randomElement(['Camera jib crane', 'Telescopic jib']);
                break;
            case 'green screen':
                $description = $this->faker->randomElement(['Green screen', 'Chroma key backdrop']);
                break;
            default:
                $description = $this->faker->sentence;
        }

        return [
            'description' => $description,
            'type' => $type,
            'etat' => $this->faker->randomElement(['new', 'used']),
        ];
    }
}
