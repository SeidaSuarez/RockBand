<section class="container-fluid">
    <div class="d-flex align-content-center flex-column">
        <img src="resources/img/arcticQHD.jpg" alt="Portrait" class="img-fluid retrato">
    </div>
    <form class="row mt-3 mx-5 px-2 pb-5 g-3 needs-validation" novalidate>

        <div class="col-sm-12 col-md-6 col-lg-6">

            <label for="nameId" class="form-label">Nombre</label>
            <input type="text" class="form-control" id="nameId" required>

            <div class="valid-tooltip">Correcto</div>
            <div class="invalid-tooltip">Es necesario rellenar el campo</div>

        </div>

        <div class="col-sm-12 col-md-6 col-lg-6">

            <label for="surnameId" class="form-label">Apellidos</label>
            <input type="text" class="form-control" id="surnameId" required>

            <div class="valid-tooltip">Correcto</div>
            <div class="invalid-tooltip">Es necesario rellenar el campo</div>

        </div>

        <div class="col-sm-12 col-md-12 col-lg-12">
            <label for="textarea" class="form-label">Mensaje</label>
            <textarea type="textarea" class="form-control" required></textarea>

            <div class="valid-tooltip">Correcto</div>
            <div class="invalid-tooltip">Es necesario rellenar el campo</div>
        </div>

        <div class="col-sm-12 col-md-12 col-lg-12">
            <label for="inputEmail1" class="form-label">Email</label>
            <input type="email" class="form-control" id="inputEmail1" required>

            <div class="valid-tooltip">Correcto</div>
            <div class="invalid-tooltip">Es necesario rellenar el campo</div>
        </div>

        <div class="col-12">

            <div class="form-check">

                <input class="form-check-input" type="checkbox" id="termsId" required>
                <label for="termsId" class="form-check-label">Acepto los terminos y las condiciones</label>

                <div class="valid-tooltip">Correcto</div>
                <div class="invalid-tooltip">Es necesario aceptar los terminos y condiciones</div>

            </div>

        </div>

        <div class="d-flex justify-content-start" id="liveAlertPlaceholder">

            <button type="submit" class="btn btn-secondary" id="liveAlertBtn">Enviar</button>

            <div class="valid-tooltip">Correcto</div>
            <div class="invalid-tooltip">Es necesario rellenar todos los</div>

        </div>

    </form>

</section>