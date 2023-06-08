<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class OrchestraInvitation extends Mailable
{
    use Queueable, SerializesModels;

    public $space;

    public $instruments;

    public $equipment;

    public $attendees;

    public $concertHours;

    public function __construct($space, $instruments, $equipment, $attendees, $concertHours)
    {
        $this->space = $space;
        $this->instruments = $instruments;
        $this->equipment = $equipment;
        $this->attendees = $attendees;
        $this->concertHours = $concertHours;
    }

    public function build()
    {
        return $this->view('emails.orchestra.invitation')
            ->subject('Orchestra Invitation');
    }
}
