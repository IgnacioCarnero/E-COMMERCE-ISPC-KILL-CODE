# Generated by Django 4.2.1 on 2023-06-15 16:28

import django.contrib.auth.models
import django.contrib.auth.validators
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0012_alter_user_first_name_max_length'),
    ]

    operations = [
        migrations.CreateModel(
            name='Art',
            fields=[
                ('id_art', models.IntegerField(primary_key=True, serialize=False)),
                ('nombre', models.CharField(max_length=200, verbose_name='nombre de arts')),
                ('email', models.CharField(max_length=200, verbose_name='email de arts')),
                ('telefono', models.BigIntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='CategoriaServicios',
            fields=[
                ('id_categoria', models.IntegerField(primary_key=True, serialize=False)),
                ('nombre_categoria', models.CharField(max_length=200, verbose_name='nombre de la categoria')),
            ],
        ),
        migrations.CreateModel(
            name='Contacto',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=200, verbose_name='nombre de quien contacta')),
                ('email', models.EmailField(max_length=254)),
                ('comentario', models.CharField(max_length=500)),
            ],
        ),
        migrations.CreateModel(
            name='Deduccion',
            fields=[
                ('cod_deduccion', models.IntegerField(primary_key=True, serialize=False)),
                ('porcentaje_deduccion', models.DecimalField(decimal_places=2, max_digits=8)),
                ('causa_deduccion', models.CharField(max_length=200, verbose_name='causa de deducción')),
            ],
        ),
        migrations.CreateModel(
            name='Empleado',
            fields=[
                ('legajo', models.IntegerField(primary_key=True, serialize=False)),
                ('nombre', models.CharField(max_length=200, verbose_name='nombre del empleado')),
                ('apellido', models.CharField(max_length=200, verbose_name='apellido del empleado')),
                ('calle', models.CharField(max_length=200, verbose_name='calle donde vive el empleado')),
                ('casa_piso_numero', models.IntegerField()),
                ('provincia', models.CharField(max_length=200, verbose_name='provincia del empleado')),
                ('email', models.CharField(max_length=200, verbose_name='email personal del empleado')),
                ('telefono', models.BigIntegerField()),
                ('cargo', models.CharField(max_length=200, verbose_name='cargo del empleado')),
                ('categoria', models.CharField(max_length=200, verbose_name='categoria del empleado')),
                ('fecha_ingreso', models.DateField()),
                ('fecha_nacimiento', models.DateField(verbose_name='fecha de nacimiento')),
                ('ciudad', models.CharField(max_length=200, verbose_name='ciudad del empleado')),
                ('cuil_empleado', models.BigIntegerField(verbose_name='cuil del empleado')),
                ('art', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='databaseManager.art')),
            ],
        ),
        migrations.CreateModel(
            name='Empresa',
            fields=[
                ('cuit', models.BigIntegerField(primary_key=True, serialize=False)),
                ('nombre', models.CharField(max_length=200, verbose_name='nombre de la empresa')),
                ('direccion', models.CharField(max_length=200, verbose_name='direccion de la empresa')),
                ('ciudad', models.CharField(max_length=200, verbose_name='direccion de la empresa')),
                ('provincia', models.CharField(max_length=200, verbose_name='direccion de la empresa')),
                ('art_contratada', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='aseguradora', to='databaseManager.art')),
            ],
        ),
        migrations.CreateModel(
            name='Extra',
            fields=[
                ('cod_extra', models.IntegerField(primary_key=True, serialize=False)),
                ('causa_extra', models.CharField(max_length=200, verbose_name='tipo de extra')),
                ('monto_extra', models.DecimalField(decimal_places=2, max_digits=8)),
            ],
        ),
        migrations.CreateModel(
            name='ObraSocial',
            fields=[
                ('id_ObraSocial', models.IntegerField(primary_key=True, serialize=False)),
                ('telefono', models.BigIntegerField()),
                ('email', models.CharField(max_length=200, verbose_name='email de la obrasocial')),
                ('nombre', models.CharField(max_length=200, verbose_name='nombre de la obrasocial')),
            ],
        ),
        migrations.CreateModel(
            name='Recibo',
            fields=[
                ('id_recibo', models.IntegerField(primary_key=True, serialize=False)),
                ('montoBruto', models.DecimalField(decimal_places=2, max_digits=8)),
                ('montoNeto', models.DecimalField(decimal_places=2, max_digits=8)),
                ('periodo', models.DateField(verbose_name='periodo')),
                ('antiguedad', models.IntegerField()),
                ('concepto', models.CharField(max_length=200, verbose_name='descripción de reciboh')),
                ('asistencia', models.DecimalField(decimal_places=2, max_digits=8)),
                ('fecha_pago', models.DateField(verbose_name='fecha del pago')),
                ('deduccion', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='databaseManager.deduccion')),
                ('extra', models.ForeignKey(blank=True, default=0, null=True, on_delete=django.db.models.deletion.CASCADE, to='databaseManager.extra')),
                ('legajo_empleado', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='databaseManager.empleado')),
            ],
        ),
        migrations.CreateModel(
            name='ServiciosKillCode',
            fields=[
                ('idServicio', models.IntegerField(primary_key=True, serialize=False)),
                ('valor', models.DecimalField(decimal_places=2, max_digits=8)),
                ('detalle', models.CharField(max_length=200, verbose_name='detalle de servicio de kill code')),
                ('nombreServicio', models.CharField(max_length=200, verbose_name='nombre de servicio de kill code')),
                ('categoria', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='categoria', to='databaseManager.categoriaservicios')),
            ],
        ),
        migrations.CreateModel(
            name='Reclamo',
            fields=[
                ('id_recla', models.IntegerField(primary_key=True, serialize=False)),
                ('estado', models.CharField(max_length=200, verbose_name='estado de reclamo')),
                ('descripcion', models.CharField(max_length=200, verbose_name='descripción de reclamo')),
                ('fecha', models.DateField(verbose_name='fecha')),
                ('tipo', models.CharField(max_length=200, verbose_name='tipo de reclamo')),
                ('empleado', models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='databaseManager.empleado')),
                ('recibo', models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='databaseManager.recibo')),
            ],
        ),
        migrations.CreateModel(
            name='Pedido',
            fields=[
                ('idPedido', models.IntegerField(primary_key=True, serialize=False)),
                ('valorTotal', models.DecimalField(decimal_places=2, max_digits=8)),
                ('detalle', models.CharField(max_length=200, verbose_name='detalle de pedidos')),
                ('cantidad', models.IntegerField()),
                ('medioDePago', models.CharField(max_length=200, verbose_name='medio de pago para pedidos')),
                ('fechaHora', models.DateTimeField()),
                ('Empresa', models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='databaseManager.empresa')),
                ('Servicio', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='databaseManager.servicioskillcode')),
            ],
        ),
        migrations.CreateModel(
            name='Factura',
            fields=[
                ('idFactura', models.IntegerField(primary_key=True, serialize=False)),
                ('valorFactura', models.DecimalField(decimal_places=2, max_digits=8)),
                ('detalleFactura', models.CharField(max_length=200, verbose_name='detalle de la factura')),
                ('cuitKillCode', models.IntegerField()),
                ('tipoFactura', models.CharField(max_length=200, verbose_name='tipo de factura')),
                ('IVA', models.DecimalField(decimal_places=2, max_digits=8)),
                ('fechaHora', models.DateTimeField()),
                ('Pedido', models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='databaseManager.pedido')),
            ],
        ),
        migrations.AddField(
            model_name='empleado',
            name='obra_social',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='empleados', to='databaseManager.obrasocial'),
        ),
        migrations.CreateModel(
            name='CustomUser',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('is_superuser', models.BooleanField(default=False, help_text='Designates that this user has all permissions without explicitly assigning them.', verbose_name='superuser status')),
                ('username', models.CharField(error_messages={'unique': 'A user with that username already exists.'}, help_text='Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.', max_length=150, unique=True, validators=[django.contrib.auth.validators.UnicodeUsernameValidator()], verbose_name='username')),
                ('first_name', models.CharField(blank=True, max_length=150, verbose_name='first name')),
                ('last_name', models.CharField(blank=True, max_length=150, verbose_name='last name')),
                ('email', models.EmailField(blank=True, max_length=254, verbose_name='email address')),
                ('is_staff', models.BooleanField(default=False, help_text='Designates whether the user can log into this admin site.', verbose_name='staff status')),
                ('is_active', models.BooleanField(default=True, help_text='Designates whether this user should be treated as active. Unselect this instead of deleting accounts.', verbose_name='active')),
                ('date_joined', models.DateTimeField(default=django.utils.timezone.now, verbose_name='date joined')),
                ('empresa', models.CharField(max_length=255)),
                ('groups', models.ManyToManyField(blank=True, help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.', related_name='user_set', related_query_name='user', to='auth.group', verbose_name='groups')),
                ('user_permissions', models.ManyToManyField(blank=True, help_text='Specific permissions for this user.', related_name='user_set', related_query_name='user', to='auth.permission', verbose_name='user permissions')),
            ],
            options={
                'verbose_name': 'user',
                'verbose_name_plural': 'users',
                'abstract': False,
            },
            managers=[
                ('objects', django.contrib.auth.models.UserManager()),
            ],
        ),
    ]
