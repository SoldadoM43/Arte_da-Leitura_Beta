<?php

namespace App\Http\Controllers;
use App\Http\Requests\User\StoreUser;
use App\User;

private $user;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

public function __construct(User $user){
    $this->user = $user;
 }
class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
}
    